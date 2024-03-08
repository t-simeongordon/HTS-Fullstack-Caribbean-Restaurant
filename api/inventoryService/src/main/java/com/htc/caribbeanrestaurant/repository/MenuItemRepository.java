package com.htc.caribbeanrestaurant.repository;

import com.htc.caribbeanrestaurant.entity.MenuItemEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MenuItemRepository extends JpaRepository<MenuItemEntity, String> {
}
