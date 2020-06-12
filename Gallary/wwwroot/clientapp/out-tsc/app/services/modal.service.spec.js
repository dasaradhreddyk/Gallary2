import { TestBed, inject } from '@angular/core/testing';
import { ModalService } from './modal.service';
describe('ModalService', function () {
    beforeEach(function () {
        TestBed.configureTestingModule({
            providers: [ModalService]
        });
    });
    it('should be created', inject([ModalService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=modal.service.spec.js.map