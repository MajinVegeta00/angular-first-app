import { Directive, ElementRef, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appBrokenImg]'
})
export class BrokenImgDirective implements OnInit {

  constructor(private elementRef:ElementRef)  { }

  ngOnInit(): void {
      const element=this.elementRef.nativeElement
      console.log('Elementos en este componente====>',element);
  }

 @HostListener('error')
 chargeDefaultImg(){
  console.log('Elementos con la imagen rota====>',this.elementRef.nativeElement); 
  const defectElement=this.elementRef.nativeElement
  defectElement.src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVyBTKAOe1exfS7WM3obDAG58O4l7mJc2VOL7KZbNzPw&s'
   
 } 
}
