import { Directive, HostBinding, HostListener, ElementRef } from "@angular/core";

@Directive ({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen = false;

  // @HostListener('click') toggleOpen() {
  //   this.isOpen = !this.isOpen;
  // } //Sử dụng để mở dropdown và đóng khi click vào vùng dropdown

  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
  }
  // Từ 13-17: Đóng 1 dropdown khi ấn vào bất kì nơi nào bên ngoài
  constructor(private elRef: ElementRef) {}
}
