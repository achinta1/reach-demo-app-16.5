import React, { createContext } from 'react';
    // Left menue select contex
    export const leftMenuSelected = {
        menue:'dashboard',
    };
    export const LeftMenuSelectedContext = createContext(
        leftMenuSelected.menue // default value
    );
    // api url path 
    export const apiDomainPath = {
        path:'http://localhost:81',
    };
    export const ApiDomainPathContext = createContext(
        apiDomainPath.path 
    );
    // load-more btn visible counter value
    export const loadMoreBtnVisible = {
        counter:10,
    };
    export const LoadMoreBtnVisibleContext = createContext(
        loadMoreBtnVisible.counter 
    );