package com.example.MusicApp.controllers;

//import com.example.MusicApp.Repositories.Practice.PracticeRepository;
import com.example.MusicApp.Repositories.Task.TaskRepository;
import com.example.MusicApp.Repositories.songs.SongRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/practices")
public class PracticeController {

    @Autowired
    SongRepository songRepository;

    @Autowired
    TaskRepository taskRepository;

//    @Autowired
//    PracticeRepository practiceRepository;
}
