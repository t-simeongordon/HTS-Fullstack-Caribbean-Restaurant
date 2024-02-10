package com.htc.caribbeanrestaurant.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/hts/inventory")
public class InventoryController {

    @GetMapping("/ingredients")
    public ResponseEntity<String> getAllIngredients(){
        return ResponseEntity.ok().body("getAllIngredients");
    }
}
