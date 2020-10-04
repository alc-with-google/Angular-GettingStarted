import { Pipe, PipeTransform} from '@angular/core'

@Pipe({
  name: "convertToSpaces"
})
export class ConvertToSpacesPipe implements PipeTransform {
  transform(value: string, character: string): string{
    return value.replace(character, " ");
  }
}
// Here a customer pipe is defined.
// implements the PipeTransform Interface
// has only one method(which takes two value)
// the DOM value its attached and the characterto be transformed.
// e.g
// {{product.productCode | lowercase | convertToSpaces: "-"}}
// as other component,this must be registered with the app module
