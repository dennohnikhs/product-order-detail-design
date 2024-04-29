import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { NavbarComponent } from "./navbar/navbar.component";
import { SidebarFiltersComponent } from "./products-sidebar/sidebar-filters.component";
import { ProductPostComponent } from "./order-detail/product-post.component";
import { OrderDetailsCardComponent } from "./order-details-card/order-details-card.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    SidebarFiltersComponent,
    ProductPostComponent,
    OrderDetailsCardComponent,
  ],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent {
  title = "ecommerce-app";
}
