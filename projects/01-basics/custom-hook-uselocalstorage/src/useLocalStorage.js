// import { useState } from "react";

export default function useLocalStorage(key) {
    const setItem = (value) => {
        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
            console.error(error);
        }
    };

    const getItem = () => {
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : "undefined";
        } catch (error) {
            console.error(error);
        }
    };

    const removeItem = () => {
        try {
            localStorage.removeItem(key);
        } catch (error) {
            console.error(error);
        }
    };

    return { setItem, getItem, removeItem };
}
