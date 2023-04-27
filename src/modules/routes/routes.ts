import { Component } from "@angular/core";
import { Routes } from "@angular/router";
import { ErrorComponent } from "src/app/core/error/error.component";
import { HomeComponent } from "src/app/core/home/home.component";
import { ProjectComponent } from "src/app/core/project/project.component";

export const routes: Routes = [
    {
        path: "home",
        component: HomeComponent
    },
    {
        path: "projects",
        component: ProjectComponent
    },
    {
        path: "error",
        component: ErrorComponent
    },
    {
        path: "",
        redirectTo: "home",
        pathMatch: "full",
    },
    {
        path: "**",
        redirectTo: "error"
    }
]