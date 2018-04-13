import call from 'js/utils/xhr-wrapper';
import { FIRST } from 'js/const/endpoints';

export const getFirstData = () => call(FIRST);
