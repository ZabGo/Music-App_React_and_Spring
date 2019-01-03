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

        Task task1 = new Task("Arpeggio", 10, "learn A m7 and C M7");
        taskRepository.save(task1);
//
        Song song1 = new Song("Hoochie Coochie Man", "https://www.youtube.com/watch?v=U5QKpsVzndc");
        songRepository.save(song1);

//        song1.addTask(task1);
//        songRepository.save(song1);

//        task1.addSong(song1);
//        taskRepository.save(task1);


        Task task2 = new Task("Come Together work on the chorus", 5, "work on the chorus");
        taskRepository.save(task2);
//
        Song song2 = new Song("Come Together", "https://www.youtube.com/watch?v=c6yYxyxx4aE");
        songRepository.save(song2);
//
//        song2.addTask(task2);
//        songRepository.save(song2);

        task2.addSong(song2);
        taskRepository.save(task2);

        Song song3 = new Song("Money - Original song", "https://www.youtube.com/watch?v=cpbbuaIA3Ds");
        songRepository.save(song3);

        Song song4 = new Song("Money - Tutorial", "https://www.youtube.com/watch?v=-Mc7OKu9o0g&t=302s");
        songRepository.save(song4);

        Task task3 = new Task("Learn Money by Pink Floyd", 10, "work on the verse");
        taskRepository.save(task3);
//
//        song3.addTask(task3);
//        songRepository.save(song3);
//
//        song4.addTask(task3);
//        songRepository.save(song4);

        task3.addSong(song3);
        task3.addSong(song4);
        taskRepository.save(task3);


//        taskRepository.save(task3);





    }
}
