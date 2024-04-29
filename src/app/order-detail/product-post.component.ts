import { Component } from "@angular/core";
import { ProductPostTopComponent } from "../order-detail-top/product-post-top.component";

@Component({
  selector: "app-product-post",
  standalone: true,
  imports: [ProductPostTopComponent],
  templateUrl: "./product-post.component.html",
  styleUrl: "./product-post.component.scss",
})
export class ProductPostComponent {}
