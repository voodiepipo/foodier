package com.vootichote.mallnavigator.controller;

import com.vootichote.mallnavigator.model.Mall;
import com.vootichote.mallnavigator.repository.MallRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/malls")
public class MallController {

    private final MallRepository mallRepository;

    public MallController(MallRepository mallRepository) {
        this.mallRepository = mallRepository;
    }

    @GetMapping
    public List<Mall> getAllMalls() {
        return mallRepository.findAll();
    }

    @GetMapping("/{id}")
    public Mall getMallById(@PathVariable Long id) {
        return mallRepository.findById(id).orElse(null);
    }

    @PostMapping
    public Mall createMall(@RequestBody Mall mall) {
        return mallRepository.save(mall);
    }
    @DeleteMapping("/{id}")
    public void deleteMall(@PathVariable Long id) {
        mallRepository.deleteById(id);
    }
    @PutMapping("/{id}")
    public Mall updateMall(@PathVariable Long id, @RequestBody Mall newMall) {
        Mall mall = mallRepository.findById(id).orElse(null);

        if (mall == null) return null;

        mall.setName(newMall.getName());
        mall.setLocation(newMall.getLocation());
        mall.setFloorCount(newMall.getFloorCount());
        mall.setCategory(newMall.getCategory());

        return mallRepository.save(mall);
    }
    @GetMapping("/search")
    public List<Mall> searchMall(@RequestParam String keyword) {
        return mallRepository.findByNameContainingIgnoreCase(keyword);
    }

}
