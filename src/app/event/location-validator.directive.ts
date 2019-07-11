import {Directive} from "@angular/core";
import {FormGroup, Validator,NG_VALIDATORS} from "@angular/forms";
@Directive({
  selector:'[validateLocation]',
  providers:[{provide:NG_VALIDATORS,useExisting:
    LocationValidatorDirective,multi:true}]
})
export class LocationValidatorDirective implements Validator{
  validate(formGroup:FormGroup):{[key:string]:any}{
    let cityControl = formGroup.controls['city'];
    let addressControl = formGroup.controls['address'];
    let countryControl = formGroup.controls['country'];
    let onlineUrlControl = (<FormGroup>formGroup.root).controls['onlineUrl'];
if((addressControl.value && cityControl.value && countryControl.value)
  ||(onlineUrlControl.value)){
  return null;
}else{
  return {validateLocation: false}
}
  }
}
