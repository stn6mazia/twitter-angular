/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router, RouterModule } from '@angular/router';
import { RECAPTCHA_V3_SITE_KEY } from 'ng-recaptcha';
import { environment } from 'src/environments/environment';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';
import { routes } from 'src/app/twitter-web-app/shared/routes/routes';
import { Register } from 'src/app/twitter-web-app/shared/models/register';
import { TextFieldComponent } from './text-field.component';


describe('TextFieldComponent', () => {
    let component: TextFieldComponent;
    let fixture: ComponentFixture<TextFieldComponent>;
    let router: Router

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterModule,
                FormsModule,
                RouterTestingModule.withRoutes(routes),
                ToastrModule.forRoot({
                    positionClass: 'toast-bottom-right'
                })
            ],
            declarations: [TextFieldComponent],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TextFieldComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        router = TestBed.inject(Router)

    });
    
    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('enviarValor', () => {
        const valueEmitSpy = spyOn(component.value, 'emit')
        component.enviarValor()
        expect(valueEmitSpy).toHaveBeenCalled()
    });
});
