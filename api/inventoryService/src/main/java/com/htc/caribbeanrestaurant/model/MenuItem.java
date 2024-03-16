package com.htc.caribbeanrestaurant.model;

import jakarta.persistence.Id;
import lombok.*;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Data
public class MenuItem {

     /**
     * id value
     */
    @Id
    private String id;

    /**
     * itemName value
     */
    private String itemName;

    /**
     * imgUrl value
     */
    private String imageUrl;

    /**
     * price value
     */
    private float price;

    /**
     * description value
     */
    private String description;

    /**
     * starRating value
     */
    private int starRating;

    /**
     * allergens value
     */
    private String[] allergens;

    /**
     * kcal value
     */
    private int kcal;
    
}
