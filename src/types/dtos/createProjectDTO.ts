/**
 * Generated by orval v6.11.0 🍺
 * Do not edit manually.
 * Localize Backend API
 * OpenAPI spec version: v1
 */
import type { UpsertProjectLanguageDTO } from './upsertProjectLanguageDTO';

/**
 * A project object to create
 */
export interface CreateProjectDTO {
  /** The (unique) name of the project */
  name: string;
  sourceLanguage: UpsertProjectLanguageDTO;
  languages?: UpsertProjectLanguageDTO[];
}
