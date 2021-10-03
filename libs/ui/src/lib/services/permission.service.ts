import { Injectable } from '@angular/core';
import { RestService } from './rest.service';

@Injectable({
  providedIn: 'root',
})
export class PermissionService extends RestService {
  endpoint = '/api/permissions';
}
