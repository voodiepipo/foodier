package com.vootichote.mallnavigator.repository;

import com.vootichote.mallnavigator.model.Mall;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface MallRepository extends JpaRepository<Mall, Long> {

    // ค้นหาจากชื่อ (ไม่สนตัวพิมพ์เล็กใหญ่)
    List<Mall> findByNameContainingIgnoreCase(String name);
}
