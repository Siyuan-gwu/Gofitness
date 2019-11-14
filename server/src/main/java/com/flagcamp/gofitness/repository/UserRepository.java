package com.flagcamp.gofitness.repository;

import com.flagcamp.gofitness.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserRepository extends MongoRepository<User, String> {

    User findUserByEmail(String email);

    User findUserByEmailAndPassword(String email, String password);

}
