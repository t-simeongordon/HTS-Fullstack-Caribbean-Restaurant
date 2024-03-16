package com.htc.caribbeanrestaurant.entity;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Table(name="menu_item_table")
public class MenuItemEntity {
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
     * inStock value
     */
    private boolean inStock;

    /**
     * price value
     */
    private int price;

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

