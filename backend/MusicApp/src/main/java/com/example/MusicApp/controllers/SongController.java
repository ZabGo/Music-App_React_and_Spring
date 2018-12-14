package com.example.MusicApp.controllers;

import com.example.MusicApp.Repositories.songs.SongRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/songs")
public class SongController {

    @Autowired
    SongRepository songRepository;

}
