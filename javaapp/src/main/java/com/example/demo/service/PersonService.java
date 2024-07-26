package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entitiy.Person;

public class PersonService {
    @Service
public class EmployeeService {
//  @Autowired
 // private PersonRepository PersonRepository;
    @Autowired
    private com.example.demo.repository.PersonRepository personRepository;

    // Create a new user
    public Person createPerson(Person person) {
        return personRepository.save(person);
    }

    // Get all users
    public List<Person> getAllPerson() {
        return personRepository.findAll();
    }
}

}
