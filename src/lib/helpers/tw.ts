import clsx from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * A helper function to merge tailwind classes
 * @param {string[]} classes
 * @returns {string} merged classes
 */
export const tw = (...classes: string[]) => twMerge(clsx(...classes));
