import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api")
public class UserController {

    private final List<User> users = new ArrayList<>();
    private final List<Post> posts = new ArrayList<>();

    @PostMapping("/register")
    public void registerUser(@RequestBody User user) {
        users.add(user);
    }

    @PostMapping("/login")
    public boolean loginUser(@RequestBody User user) {
        return users.stream()
                .anyMatch(u -> u.getUsername().equals(user.getUsername()) && u.getPassword().equals(user.getPassword()));
    }

    @PostMapping("/post")
    public void createPost(@RequestBody Post post) {
        posts.add(post);
    }

    @GetMapping("/posts")
    public List<Post> getPosts() {
        return posts;
    }
}
