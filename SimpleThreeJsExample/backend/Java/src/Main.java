import cn.easyar.webar.ResultInfo;
import cn.easyar.webar.WebAR;

import java.io.IOException;

public class Main {

    public static void main(String[] args) {
        String cloudKey = "65dce09a71c50c638e0cb3f386da8396";
        String cloudSecret = "hc5fF3rXRfAFJeAThKA1WQZ1PYIhZrl02A7YeQ6cB7x3hX4PEiO4B8mO2nzYWQntWPSltTJG5gL7y13QMAx3C6RJCtXFxsgm9kigQKJq6I7WkNYosOhYzVg1bohVqz8Y";
        String cloudUrl = "b21934dca51e397a6b2f10702ef84820.cn1.crs.easyar.com:8080/search";

        WebAR webAR = new WebAR(cloudKey, cloudSecret, cloudUrl);

        try {
            // 图片的base64数据
            String image = "/9j/4AAQSkZJRgA";
            ResultInfo info = webAR.recognize(image);

            if (info.getStatusCode() == 0) {
                // statusCode为0时，识别到目标，数据在target中
                System.out.println(info.getResult().getTarget().getTargetId());
            } else {
                // 未识别到目标
                System.out.println(info.getStatusCode());
                System.out.println(info.getResult().getMessage());
            }

        } catch (IOException e) {
            System.out.println(e.getMessage());
        }
    }
}
