import csvtojson from 'csvtojson';
import type { Patient } from 'src/models/Patient';

import { endPoint } from './PatientConfig';

/**
 * 陽性患者の属性データを取得する
 *
 * @returns 陽性患者の属性データ
 */
export const getPatients = async (): Promise<Patient[]> => {
  return await fetch(endPoint)
    .then((response) => {
      return response.text();
    })
    .then((csv) => {
      return csvtojson().fromString(csv);
    })
    .then((json: any[]): Patient[] => {
      return json.map((row) => {
        return {
          publishedDate: row['公表_年月日'],
          age: row['患者_年代'],
        };
      });
    })
    .catch((error) => {
      console.error(
        '陽性患者の属性データ取得時にエラーが発生しました。',
        error,
      );
      throw error;
    });
};
