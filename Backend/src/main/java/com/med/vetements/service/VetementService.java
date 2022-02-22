package com.med.vetements.service;


import java.util.List;

import com.med.vetements.entities.Vetement;

public interface VetementService {
	Vetement saveVetement(Vetement v);
	Vetement updateVetement(Vetement v);
	void deleteVetement(Vetement v);
	void deleteVetementById(Long id);
	Vetement getVetement(Long id);
	List<Vetement> getAllVetements();

}
