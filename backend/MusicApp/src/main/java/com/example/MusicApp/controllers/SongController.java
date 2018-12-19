package com.example.MusicApp.controllers;

import com.example.MusicApp.Repositories.Task.TaskRepository;
import com.example.MusicApp.Repositories.songs.SongRepository;
import com.example.MusicApp.models.Song;
import com.example.MusicApp.models.Task;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/songs")
public class SongController {

    @Autowired
    SongRepository songRepository;

    @Autowired
    TaskRepository taskRepository;

//    @PutMapping(value = "/{id}/task/{taskId}")
//    public void updateAddTask(@PathVariable long id, @PathVariable long taskId){
//        Song song = songRepository.getOne(id);
////        songRepository.save(song);
//        Task task = taskRepository.getOne(taskId);
////        taskRepository.save(task);
//        task.addSong(song);
//        song.addTask(task);
//        taskRepository.save(task);
//
//        songRepository.save(song);
//
//    }



}
