import { HttpHandlerFn, HttpInterceptorFn, HttpRequest } from "@angular/common/http";
import { inject } from "@angular/core";
import { Auth } from "./auth";
import { catchError, switchMap, throwError } from "rxjs";

let isRefreshing = false;

export const authTokenInterceptor: HttpInterceptorFn = (req, next) => {
    const authService = inject(Auth)
    const token = authService.token

    if (!token) return next(req)

    if (isRefreshing) {
        return refreshAndProcced(authService, req, next)
    }



    return next(setTokens(req, token)).pipe(
        catchError(error => {
            if (error.status === 403) {
                return refreshAndProcced(authService, req, next)
            }

            return throwError(() => new Error(error))
        })
    )
}


const refreshAndProcced = (authService: Auth, req: HttpRequest<any>, next: HttpHandlerFn) => {
    if (!isRefreshing) {
        isRefreshing = true
        return authService.refreshAuthToken().pipe(
            switchMap(res => {
                isRefreshing = false
                return next(setTokens(req, res.access_token))
            })
        )
    }

    return next(setTokens(req, authService.token!))
}

const setTokens = (req: HttpRequest<any>, token: string) => {
    return req.clone({
        setHeaders: {
            Authorization: `Bearer ${token}`
        }
    })
}