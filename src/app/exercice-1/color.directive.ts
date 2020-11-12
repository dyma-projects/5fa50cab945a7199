import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
  selector: "[appColor]",
})
export class ColorDirective {
  constructor(private el: ElementRef) {}

  @HostListener("window:keydown", ["$event"]) windowClick($event) {
    console.log($event);
    if ($event.key === "ArrowUp") {
      this.changeColor("red");
    } else if ($event.key === "ArrowRight") {
      this.changeColor("blue");
    } else if ($event.key === "ArrowDown") {
      this.changeColor("purple");
    } else if ($event.key === "ArrowLeft") {
      this.changeColor("green");
    } else {
      this.changeColor("black");
    }
  }

  changeColor(color: string): void {
    this.el.nativeElement.style.color = color;
  }
}
