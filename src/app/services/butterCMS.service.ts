import Butter from 'buttercms';
import { environment } from 'src/environments/environment';

export const butterService = Butter(environment.api_token);
