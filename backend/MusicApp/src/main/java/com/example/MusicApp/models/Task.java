package com.example.MusicApp.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.Cascade;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "tasks")
public class Task {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name ="name")
    private String name;

    @Column(name = "content")
    private String content;

    @Column(name = "time")
    private int time;

//    @ManyToOne
//    @JoinColumn(name = "practice_id", nullable = false)
//    private Practice practice;


    @JsonIgnoreProperties("tasks")
    @ManyToMany
    @Cascade(org.hibernate.annotations.CascadeType.SAVE_UPDATE)
    @JoinTable(
            name = "songs_tasks",
            joinColumns = {@JoinColumn(name = "task_id", nullable = false, updatable = false)},
            inverseJoinColumns = {@JoinColumn(name="song_id", nullable = false, updatable = false)}
    )
    private List<Song> songs;

    public Task(String name, int time, String content) {
        this.name = name;
        this.time = time;
        this.content = content;
        this.songs = new ArrayList<>();
//        this.practice = practice;
    }

    public Task(){}

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public int getTime() {
        return time;
    }

    public void setTime(int time) {
        this.time = time;
    }

    public List<Song> getSongs() {
        return songs;
    }

    public void setSongs(List<Song> songs) {
        this.songs = songs;
    }

    public void addSong(Song song){
        this.songs.add(song);
    }

//    public Practice getPractice() {
//        return practice;
//    }
//
//    public void setPractice(Practice practice) {
//        this.practice = practice;
//    }
}
