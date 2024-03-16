package com.htc.caribbeanrestaurant.model;

import lombok.*;

import java.util.List;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Data
public class Ingredients {
    List<Ingredient> ingredients;
}


