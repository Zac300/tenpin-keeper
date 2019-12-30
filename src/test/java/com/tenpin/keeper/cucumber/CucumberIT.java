package com.tenpin.keeper.cucumber;

import org.junit.runner.RunWith;

import com.tenpin.keeper.AbstractCassandraTest;
import io.cucumber.junit.CucumberOptions;
import io.cucumber.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(plugin = "pretty", features = "src/test/features")
public class CucumberIT extends AbstractCassandraTest {

}
