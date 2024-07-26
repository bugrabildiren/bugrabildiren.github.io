package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.demo.entitiy.Person;

public interface PersonRepository extends JpaRepository<Person, Long> {

}