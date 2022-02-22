package com.med.vetements.repos;


import com.med.vetements.entities.Vetement;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(path = "rest")
public interface VetementRepository extends JpaRepository<Vetement, Long> {
	List<Vetement> findByNom(String nom);
	List<Vetement> findByNomContains(String nom);
	
	@Query("select v from Vetement v where v.nom like %:nom  and v.price  > :prix")
	List<Vetement> findByNomPrix (@Param("nom") String nom,@Param("prix") Double prix);
	
	
	
	List<Vetement> findByOrderByNomAsc();
	
	
	@Query("select v from Vetement v order by v.nom ASC, v.price DESC")
	List<Vetement> trierVetementsNomsPrix ();
}