package com.htc.caribbeanrestaurant.model;

import lombok.*;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Ingredient {
    String name;
    String description;
    int quantity;
}
