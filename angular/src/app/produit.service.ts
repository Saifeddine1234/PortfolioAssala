import { Injectable, Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Categorie} from '../app/categorie';
import {SousCategorie} from '../app/souscategorie';
import {Marque} from '../app/marque';
import {Produit} from '../app/produit';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  cartItems = [];
  totalAmount : any;

  constructor(private httpclient:HttpClient , private router: Router , private injector : Injector) {  
  }


  addItemsToCart = (produit : never) => {
    /*
    this.cartItems.push(produit);
    localStorage.setItem("name","saif");
    const value = localStorage.getItem("name")
    console.log(this.cartItems);
    console.log(value);
*/

  }
  add_categorie(categorie: Categorie){
    console.log(categorie);
    return this.httpclient.post<any>('http://localhost:3001/produits/add_categorie', categorie);
  }
  
  add_sous_categorie(souscategorie: SousCategorie){
    console.log(souscategorie);
    return this.httpclient.post<any>('http://localhost:3001/produits/add_sous_categorie', souscategorie);
  }
  add_marque(marque: Marque){
    console.log(marque);
    return this.httpclient.post<any>('http://localhost:3001/produits/add_marque', marque);
  }
  add_produit(produit: Produit){
    console.log(produit);
    return this.httpclient.post<any>('http://localhost:3001/produits/add_produit', produit);
  }

  getCategorie(){
    return this.httpclient.get<any>('http://localhost:3001/produits/get_categorie');
  }
  getSousCategorie(){
    return this.httpclient.get<any>('http://localhost:3001/produits/get_sous_categorie');
  }
  getMarque(){
    return this.httpclient.get<any>('http://localhost:3001/produits/get_marque');
  }
  getProduit(){
    return this.httpclient.get<any>('http://localhost:3001/produits/get_produit');
  }
  getByCategorie(cat: String) {
    console.log(cat);
    return this.httpclient.get<any>('http://localhost:3001/produits/get_produit_bycat/'+cat)
  }
  getCategoriebySouscat(scat: String) {
    return this.httpclient.get<any>('http://localhost:3001/produits/get_produit_bysouscat/'+scat)
  }
  getSousCatbycat(cat: String) {
    return this.httpclient.get<any>('http://localhost:3001/produits/get_souscat_bycat/'+cat)
  }
  getProduitByID(id: String) {
    console.log(id);
    return this.httpclient.get<any>('http://localhost:3001/produits/get_produit_byID/'+id)
  }



    /*
    if (!productExists) {
      this.cartItems.push({
        id: product.id,
        nom: product.nom,
        prix: product.prix,
        description: product.description,
        derniere_maj: product.derniere_maj,
        quantity: 1,
        url: product.url
      });
    }
    this.getTotalAmount();
  }

  getTotalAmount() {
    if (this.cartItems) {
      this.totalAmount = 0;
      this.cartItems.forEach((item) => {
        this.totalAmount += (item.quantity * item.prix );
      });
      return {
        totalAmount: this.totalAmount
      };
    }
  }
  */
}

