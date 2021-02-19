import { TestBed } from '@angular/core/testing';

import { ManageFileService } from './manage-file.service';

describe('ManageFileService', () => {
  let service: ManageFileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManageFileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
