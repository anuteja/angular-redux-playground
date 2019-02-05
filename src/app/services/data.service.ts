import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Product} from '../root-store/product-store/product.model';
// import ProductJson from '../../assets/products.json';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  private API_BASE_URL = 'http://localhost:4200';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Product[]> {
    return this.http
      .get<Product[]>(
        `assets/products.json`
      );
  }
}
