package com.med.vetements;

import java.util.Date;
import java.util.List;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.med.vetements.entities.Vetement;
import com.med.vetements.repos.VetementRepository;

@SpringBootTest
public class VetementsApplicationTests {
  @Autowired
  private VetementRepository vetementRepository;

  @Test
  public void testCreateVetement() {
    Vetement vet = new Vetement();
    vetementRepository.save(vet);
  }

  @Test
  public void testFindVetement() {
    Vetement v = vetementRepository.findById(2L).get();
    System.out.println(v);
  }

  @Test
  public void testUpdateVetement() {
    Vetement v = vetementRepository.findById(3L).get();
    v.setPrice(560.0);
    vetementRepository.save(v);
  }

  @Test
  public void testDeleteVetement() {
    vetementRepository.deleteById(1L);
  }

  @Test
  public void testListerTousVetements() {
    List<Vetement> vets = vetementRepository.findAll();
    for (Vetement v : vets) {
      System.out.println(v);
    }
  }
  
  @Test
  public void testFindByNomProduit(){
	  List<Vetement> vets = vetementRepository.findByNom("Espadrille Nike") ;
	  for (Vetement v : vets)  System.out.println(v);
  }
  
  @Test
  public void testFindByNomProduitContains (){
	  List<Vetement> vets=vetementRepository.findByNomContains("Esp") ;
	  for (Vetement p : vets)	System.out.println(p);
  }
  
  @Test
  public void testfindByNomPrix(){
	  List<Vetement> vets = vetementRepository.findByNomPrix("Espadrille Nike", 100.0) ;
	  for (Vetement v : vets) System.out.println(v);
	 
  }
  
  

  	
  	@Test
  	public void testfindByOrderByNomProduitAsc()  	{
  		List<Vetement> vets = vetementRepository.findByOrderByNomAsc();
  		for (Vetement v : vets)System.out.println(v);
  	}
  	
  	@Test
  	public void testTrierProduitsNomsPrix(){
  		List<Vetement> vets = vetementRepository.trierVetementsNomsPrix();
  		for (Vetement v : vets)System.out.println(v);
  	}
  	
  	
 }
