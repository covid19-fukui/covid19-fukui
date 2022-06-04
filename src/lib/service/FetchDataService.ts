import { getCallCenters } from '../repository/callcenter/CallCenterRepository';
import { getHospitalizatons } from '../repository/hospitalization/HospitalizationRepository';
import { getPapers } from '../repository/paper/PaperRepository';
import { getPatients } from '../repository/patient/PatientRepository';
import { getTestCounts } from '../repository/testcount/TestCountRepository';

/**
 * マッシュアップデータを取得
 *
 * @returns マッシュアップのデータ
 */
export const fetchData = async (): Promise<any> => {
  return Promise.all([
    getPatients(),
    getCallCenters(),
    getHospitalizatons(),
    getTestCounts(),
    getPapers(),
  ])
    .then((results) => {
      return {
        patients: results[0].slice(-10),
        callCenters: results[1].slice(-10),
        hospitalizations: results[2].slice(-10),
        testCounts: results[3].slice(-10),
        papers: results[4].slice(-10),
      };
    })
    .catch((error) => {
      console.error(error);
      throw error;
    });
};
