import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements AfterViewInit {

  ngAfterViewInit() {
    const buttons = document.querySelectorAll<HTMLElement>(".sidebar ul button");
    buttons.forEach(button => {
      button.addEventListener('click', (event) => this.onClick(event));
    });
  }

  onClick(event: MouseEvent) {
    const item = event.currentTarget as HTMLElement;
    const subMenus = document.querySelectorAll<HTMLElement>(".sub-menu");
    const buttons = document.querySelectorAll<HTMLElement>(".sidebar ul button");

    subMenus.forEach(menu => menu.style.height = "0px");
    buttons.forEach(button => button.classList.remove("active"));

    if (!item.nextElementSibling) {
      item.classList.add("active");
      return;
    }

    const subMenu = item.nextElementSibling as HTMLElement;
    const ul = subMenu.querySelector<HTMLElement>("ul");

    if (!subMenu.clientHeight) {
      subMenu.style.height = `${ul?.clientHeight}px`;
      item.classList.add("active");
    } else {
      subMenu.style.height = "0px";
      item.classList.remove("active");
    }
  }
}
