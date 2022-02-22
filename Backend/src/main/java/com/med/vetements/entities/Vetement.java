//Vetement.java
package com.med.vetements.entities;

import java.util.Date;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;


@Entity
public class Vetement {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;
  private String nom;
  private String description;
  private String image;
  private String category;
  private Double price;
  private Double rating;


  public Vetement() {
  }

  public Vetement(Long id, String nom, String description, String image, String category, Double price, Double rating) {
    this.id = id;
    this.nom = nom;
    this.description = description;
    this.image =   image;
    this.category = category;
    this.price = price;
    this.rating = rating;
  }

  public Long getId() {
    return this.id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public String getNom() {
    return this.nom;
  }

  public void setNom(String nom) {
    this.nom = nom;
  }

  public String getDescription() {
    return this.description;
  }

  public void setDescription(String description) {
    this.description = description;
  }

  public String getImage() {
    return this.image;
  }

  public void setImage(String image) {
    this.image = image;
  }

  public String getCategory() {
    return this.category;
  }

  public void setCategory(String category) {
    this.category = category;
  }

  public Double getPrice() {
    return this.price;
  }

  public void setPrice(Double price) {
    this.price = price;
  }

  public Double getRating() {
    return this.rating;
  }

  public void setRating(Double rating) {
    this.rating = rating;
  }

  


  @Override
  public String toString() {
    return "{" +
      " id='" + getId() + "'" +
      ", nom='" + getNom() + "'" +
      ", description='" + getDescription() + "'" +
      ", image='" + getImage() + "'" +
      ", category='" + getCategory() + "'" +
      ", price='" + getPrice() + "'" +
      ", rating='" + getRating() + "'" +
      "}";
  }




}