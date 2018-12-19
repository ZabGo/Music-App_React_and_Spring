package com.example.MusicApp.components;

//import com.example.MusicApp.Repositories.Practice.PracticeRepository;
import com.example.MusicApp.Repositories.Task.TaskRepository;

import com.example.MusicApp.Repositories.songs.SongRepository;
//import com.example.MusicApp.models.Practice;
import com.example.MusicApp.models.Song;
import com.example.MusicApp.models.Task;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    SongRepository songRepository;
    @Autowired
    TaskRepository taskRepository;
//    @Autowired
//    PracticeRepository practiceRepository;

    public DataLoader(){}

    public void run(ApplicationArguments agrs){

//        Practice practice = new Practice("session1", 45);
//        practiceRepository.save(practice);

        Task task1 = new Task("task1", 5, "task1");
        taskRepository.save(task1);
//
        Song song1 = new Song("song1", "https://www.youtube.com/watch?v=8JvyxKJToJs");
        songRepository.save(song1);

        song1.addTask(task1);
        songRepository.save(song1);

//        task1.addSong(song1);
//        taskRepository.save(task1);


        Task task2 = new Task("task2", 5, "new arpeggio");
        taskRepository.save(task2);
//
        Song song2 = new Song("song2", "https://www.youtube.com/watch?v=8JvyxKJToJs");
        songRepository.save(song2);
//
//        song2.addTask(task2);
//        songRepository.save(song2);

        task2.addSong(song2);
        taskRepository.save(task2);
//
//        taskRepository.save(task1);
////
//
//

//








//        Task task2 = new Task("Work scale", 10, "new scale in G7");
//        Task task3 = new Task("Work Song", 15, "new song");
//
//
//
//
//

//
//
//
//
//        Song song2 = new Song("Stone River", "https://www.youtube.com/watch?v=iFOzPY_ZF0c");
//
//
//        Song song3 = new Song("Mannish Boy", "https://www.youtube.com/watch?v=bSfqNEvykv0");
//
//
////        Song song4 = new Song("Little Wing", "https://www.youtube.com/watch?v=An4uDegHB8s");
//
//        song1.setTask(task1);
//        song2.setTask(task2);
//        song3.setTask(task3);
//
//
//
//        task1.addSong(song1);
//        task2.addSong(song2);
//        task3.addSong(song3);

//        songRepository.save(song1);
//        songRepository.save(song3);
//
//        songRepository.save(song2);
//
//        taskRepository.save(task1);
//        taskRepository.save(task2);
//        taskRepository.save(task3);



    }
}
