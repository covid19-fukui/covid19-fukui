import csvtojson from 'csvtojson';
import type { Hospitalizaton } from 'src/models/Hospitalization';

import { endPoint } from './HospitalizationConfig';

/**
 * 入院患者数の取得
 *
 * @returns 入院患者数のデータ
 */
export const getHospitalizatons = async (): Promise<Hospitalizaton[]> => {
  return await fetch(endPoint)
    .then((response) => {
      return response.text();
    })
    .then((csv) => {
      return csvtojson().fromString(csv);
    })
    .then((json: any[]): Hospitalizaton[] => {
      return json.map((row) => {
        return {
          completedDate: row['完了_年月日'],
          positiveCount: row['陽性確認_件数'],
          deadCount: row['陰性確認_件数'],
          dischargeCount: row['死亡確認_件数'],
        };
      });
    })
    .catch((error) => {
      console.error('入院患者数データの取得時にエラーが発生しました。', error);
      throw error;
    });
};
