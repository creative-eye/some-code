import call from 'js/utils/xhr-wrapper';
import { SECOND } from 'js/const/endpoints';

export const getSecondData = () => call(SECOND);