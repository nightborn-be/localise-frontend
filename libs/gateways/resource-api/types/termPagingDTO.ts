/**
 * Generated by orval v6.13.1 🍺
 * Do not edit manually.
 * Localize Backend API
 * OpenAPI spec version: v1
 */
import type { TermDTO } from './termDTO';

/**
 * A paging
 */
export interface TermPagingDTO {
    /** The terms */
    data: TermDTO[];
    /** The number of pages */
    nbPages: number;
    /** The current page */
    page: number;
    /** The current size */
    size: number;
    /** The total amount of terms */
    totalAmount: number;
}
