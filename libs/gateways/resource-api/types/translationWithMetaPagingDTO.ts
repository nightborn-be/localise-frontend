/**
 * Generated by orval v6.13.1 🍺
 * Do not edit manually.
 * Localize Backend API
 * OpenAPI spec version: v1
 */
import type { TranslationWithMetaDTO } from './translationWithMetaDTO';

/**
 * A paging
 */
export interface TranslationWithMetaPagingDTO {
    /** The translations */
    data?: TranslationWithMetaDTO[];
    /** The number of pages */
    nbPages?: number;
    /** The current page */
    page?: number;
    /** The current size */
    size?: number;
    /** The total amount of translations */
    totalAmount?: number;
}
